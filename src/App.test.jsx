import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('App',()=>{
  let wrapper = shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('header', ()=>{
    const header = wrapper.find('header');

    it('should load header without todos', ()=>{
      expect(header).toExist();
    });

    it('should render header with header css class', ()=>{
      expect(header).toHaveClassName('header');
    });

    it('should render h1 with text',()=>{
      const h1 = header.find('h1');
      expect(h1).toHaveText('todos');
    });

    it('should render input',()=>{
      const input = header.find('input');
      expect(input).toExist();
    });

    it('should render input with specified css class',()=>{
      const input = header.find('input');
      expect(input).toHaveClassName('new-todo');
    });

    it('should render input with placeholder', ()=>{
      const input = header.find('input');
      expect(input).toHaveProp({placeholder: 'What needs to be done?'});
    });

    it('should initially render input with empty value', ()=>{
      const input = header.find('input');
      expect(input).toHaveProp({value: ''});
    });

    it('should render input with header with autoFocus', ()=>{
      const input = header.find('input');
      expect(input).toHaveProp({autoFocus: true});
    });
  });

describe('main section', ()=>{
      const mainSection = wrapper.find('section');

      describe('main section input',()=>{
        it('input should render with id toggle all', ()=>{
          const input = mainSection.find('input');
          expect(input).toHaveProp({id: 'toggle-all'});
        });
    
        it('input should render with className toggle all', ()=>{
          const input = mainSection.find('input');
          expect(input).toHaveProp({className: 'toggle-all'});
        });

        it('input should render with type checkbox', ()=>{
          const input = mainSection.find('input');
          expect(input).toHaveProp({type: 'checkbox'});
        });

        it('', ()=>{

        });
      });
    
  });
});

