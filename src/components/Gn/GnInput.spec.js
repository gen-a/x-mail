import React from 'react'
import GnInput from './GnInput.js'

describe('GnInput from GnInput', ()=>{
    const props = {
        label:'Input label',
        input:{},
        type:'text',
        placeholder:'placeholder',
        meta:{
            error:'error',
            touched:true
        }
    };
    it('GnInput from render', ()=>{
        const wrapper = shallow(<GnInput {...props} />);
        expect(wrapper).toMatchSnapshot()
    });

});