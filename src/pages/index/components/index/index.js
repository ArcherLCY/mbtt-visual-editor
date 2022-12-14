import './indexStyle.scss'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Skeleton, Card } from 'antd';
import React, { useEffect, useState } from 'react';
const { Meta } = Card;
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
function Index() {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                })),
            ),
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

                window.dispatchEvent(new Event('resize'));
            });
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };
    return (
        <div className='index'>
            <div className='top'>
                <div style={{display:'inline-block',float:'left',marginRight:10}}>
                <Card
                    style={{
                        width: 300,
                        display:'inline-block'
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="?????????"
                        description="???????????????????????????????????????..."
                    />
                </Card>
                </div>
                <div style={{display:'inline-block',float:'left'}}>
                   <Card title="????????????" >
                    <Card.Grid style={gridStyle}>????????????6</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                    ????????????7
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>????????????1</Card.Grid>
                    <Card.Grid style={gridStyle}>????????????2</Card.Grid>
                    <Card.Grid style={gridStyle}>????????????3</Card.Grid>
                    <Card.Grid style={gridStyle}>????????????4</Card.Grid>
                    <Card.Grid style={gridStyle}>????????????5</Card.Grid>
                </Card> 
                </div>
            
                
                
            </div>
            <div className='bottom'>
                <List
                    className="demo-loadmore-list"
                    loading={initLoading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item
                            actions={[<a href='#' key="list-loadmore-more">??????</a>]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.picture.large} />}
                                    title={<a href="https://ant.design">{item.name?.last}</a>}
                                />
                                <div>???????????????2022-10-08 11:18:20</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>

        </div>
    )
}

export default Index