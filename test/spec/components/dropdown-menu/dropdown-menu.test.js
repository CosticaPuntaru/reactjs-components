import React from 'react';
import DropdownMenu from 'views/components/dropdown-menu';
import * as utils from '../../../utils/utils';
import {Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';
import {spy} from 'sinon';
import {mount} from 'enzyme';

const data = [
    {value: '0', label: 'Edit'},
    {value: '1', label: 'Delete'},
    {value: '2', label: 'Select'},
    {type: 'header', label: 'header'},
    {value: '3', label: 'Link'},
];
const onItemClick = spy(() => { });
const dropdownMenu = (
  <DropdownMenu
    items={data}
    onItemClick={onItemClick}
  />
);

describe('DropdownMenu', () => {
  it('renders a list with class DropdownMenu', () => {
    const component = utils.shallowlyRenderedOutput(dropdownMenu);

    expect(component.type).to.equal('ul');
    expect(component.props.className).to.equal('DropdownMenu');
  });

  it('has the right number of items', () => {
    const component = utils.shallowlyRenderedOutput(dropdownMenu);

    expect(component.props.children.length).to.equal(data.length);
  });

});
