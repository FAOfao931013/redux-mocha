import expect from 'expect';
import React from 'react';
import Test from '../component';
import { shallow } from 'enzyme';

const props = {
    getActionOneText: expect.createSpy(),
    actionOneText: 'one',
    getActionTwoText: expect.createSpy(),
    actionTwoText: 'two',
    fetchText: expect.createSpy(),
    fetchTextRequest: 'request',
    fetchTextSuccess: 'success',
    fetchDate: '20160802'
};

const enzymeWrapper = shallow(<Test {...props}/>);

describe('components', () => {
    describe('Test', () => {
        it('it should render Test', () => {
            expect(enzymeWrapper.props().className).toEqual('test');
            expect(enzymeWrapper.find('button').at(0).text()).toEqual('点击我发送ActionOne');
            expect(enzymeWrapper.find('button').at(1).text()).toEqual('点击我发送ActionTwo');
            expect(enzymeWrapper.find('button').at(2).text()).toEqual('点击我发送fetchText');
        });

        it('it should render props', () => {
            const buttonOneClick = enzymeWrapper.find('button').at(0).props().onClick;
            const buttonTwoClick = enzymeWrapper.find('button').at(1).props().onClick;
            const buttonThreeClick = enzymeWrapper.find('button').at(2).props().onClick;

            expect(buttonOneClick).toEqual(props.getActionOneText);
            expect(buttonTwoClick).toEqual(props.getActionTwoText);
            expect(buttonThreeClick).toEqual(props.fetchText);

            const divOneText = enzymeWrapper.find('.test').children().find('div').at(0).text();
            const divTwoText = enzymeWrapper.find('.test').children().find('div').at(1).text();
            const divThreeText = enzymeWrapper.find('.test').children().find('div').at(2).text();
            const divFourText = enzymeWrapper.find('.test').children().find('div').at(3).text();

            expect(divOneText).toEqual('发送ActionOne后得到:' + props.actionOneText);
            expect(divTwoText).toEqual('发送ActionTwo后得到:' + props.actionTwoText);
            expect(divThreeText).toEqual('请求中:' + props.fetchTextRequest);
            expect(divFourText).toEqual('请求成功:' + props.fetchTextSuccess + ',成功得到日期:' + props.fetchDate);
        })
    })
});