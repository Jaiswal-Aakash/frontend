import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import css from "./joinusTable.module.scss";
import {BiSolidDownArrow} from 'react-icons/bi'; 

interface CustomHeaderWithDropdownProps {
  label: string;
  value: any;
  onSelectionChange: (selectedValue: string) => void;
}

const CustomHeaderWithDropdown: React.FC<CustomHeaderWithDropdownProps> = ({ label,value,onSelectionChange}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null); 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }; 
  const handleSelection = (selectedItem: any) => {
    setSelectedValue(selectedItem);
    onSelectionChange(selectedItem); // Notify the parent component about the selection
  };


  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className={css.dropdown}>
        <DropdownToggle caret>
          {label}<BiSolidDownArrow className={css.arrow}/>
        </DropdownToggle>
        <DropdownMenu>
        {value.map((item, index) => (
            <DropdownItem key={index}  onClick={() => handleSelection(label === 'ROLE' ? item.role : label === 'LOCATION' ? item.location : item.department)}>
                {label === 'ROLE' ? item.role : label === 'LOCATION' ? item.location : item.department}
                </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CustomHeaderWithDropdown;
