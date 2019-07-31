import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { Link } from 'react-router-dom';

class List extends Component {
    render() { 
        const { list, getMoreList } = this.props;
        return (
            <div>
                {
                    list.map((item)=>{
                        return (
                        <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                        <ListItem >
                            <img className="pic" src={item.get('imgurl')} />
                            <ListInfo>
                                <h3 className="title" >{item.get('title')}</h3>
                                <p className="desc" >{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                        </Link>);
                    })
                }
                <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
            
            </div>
          );
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home','articleList'])
})
const mapDispatchToProps = (dispatch) => ({
    getMoreList() {

    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);