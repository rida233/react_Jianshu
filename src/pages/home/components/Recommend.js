import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';


class Recommend extends Component {
    render() { 
        const { imgUrl } = this.props;
        return (
            <RecommendWrapper>
                {
                    imgUrl.map((item)=>{
                    return <RecommendItem key={item.get('id')} imgUrl={item.get('url')} />    
                })
                }
            </RecommendWrapper>
          );
    }
}
const mapStateToProps = (state) => ({
    imgUrl: state.getIn(['home','recommendImg'])
} )
export default connect(mapStateToProps,null)(Recommend);