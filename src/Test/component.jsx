import React from 'react';
import './style.less';

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            getActionOneText,
            actionOneText,
            getActionTwoText,
            actionTwoText,
            fetchText,
            fetchTextRequest,
            fetchTextSuccess,
            fetchDate
            } = this.props;

        return (
            <div className='test'>
                <button
                    onClick={getActionOneText}>点击我发送ActionOne
                </button>
                <div>发送ActionOne后得到:{actionOneText}</div>

                <button
                    onClick={getActionTwoText}>点击我发送ActionTwo
                </button>
                <div>发送ActionTwo后得到:{actionTwoText}</div>

                <button
                    onClick={fetchText}>点击我发送fetchText
                </button>
                <div>请求中:{fetchTextRequest}</div>
                <div>请求成功:{fetchTextSuccess},成功得到日期:{fetchDate}</div>
            </div>
        );
    }
}

Test.propTypes = {
    getActionOneText: React.PropTypes.func.isRequired,
    actionOneText: React.PropTypes.string,
    getActionTwoText: React.PropTypes.func.isRequired,
    actionTwoText: React.PropTypes.string,
    fetchText: React.PropTypes.func.isRequired,
    fetchTextRequest: React.PropTypes.string,
    fetchTextSuccess: React.PropTypes.string,
    fetchDate: React.PropTypes.string
};

export default Test;