import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
    render() { 
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item)=>{
                        return <TopicItem key={item.get('id')}>{item.get('title')}</TopicItem>
                    })
                }
                <TopicItem>社会热点</TopicItem>
            </TopicWrapper>
          );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','topicList'])

});


export default connect(mapStateToProps, null)(Topic);