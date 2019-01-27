import React from 'react'
import MailList from './MailList.js'

describe('MailList from MailList', ()=>{

    const mails = [                {
        id:"5c4830978cec8b07a6138418",
        isRead:true,
        starred:true,
        name:{
            first:"Tabitha",
            last:"Forbes"
        },
        from:"tabitha.forbes@assistix.info",
        subject:"Sunt mollit esse dolor eiusmod ad enim dolor quis dolore.",
        body:"Elit nulla conseq00:38 GMT+0000 (UTC)"
    }];

    const props = {
        mails:{
            outbox:mails,
            inbox:mails
        },
        activeList:"inbox",
        opened:[],
        delMail: () => {},
        updMailAttribute: () => {},
        toggleOpenMail: () => {}
    };
    it('MailList from render', ()=>{
        const wrapper = shallow(<MailList {...props} />);
        expect(wrapper).toMatchSnapshot()
    });

});