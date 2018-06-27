import React, { ReactChild } from 'react';
import Collapsible from 'common/components/Collapsible';
import { IGroup } from "core/models/Group";

export interface IProps {
  selected: string | undefined;
  groups: IGroup[];
  onClick: (g: IGroup) => boolean;
}

class Dropdown extends Collapsible<IProps> {
  render() {
    const { groups, selected, onClick } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="profile-dropdown-container profile-search-field">
        { collapsed
          ? <Item selected={!selected || true} onClick={() => this.toggleCollapse()} >{ selected || 'Velg en gruppe' }</Item>
          : groups.map((group) => (
            <Item
              key={group.name}
              selected={group.name === selected}
              onClick={() => {
                onClick(group);
                this.toggleCollapse();
              }}
            >
              { group.name }
            </Item>))
        }
      </div>
    )
  }
}

export interface IItemProps {
  children: ReactChild;
  selected: boolean;
  onClick: () => void; 
}

const Item = ({ children, selected = false, onClick }: IItemProps) => (
  <div
    className={'profile-dropdown-item' + (selected ? ' profile-dropdown-selected' : '')}
    onClick={() => onClick()}  
  >
    <h4>{ children }</h4>
  </div>
)

export default Dropdown;
