import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';


  class DropDownMedicine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        objectArray: props.medicineThere
      };
    }    
  render() {
//     let getMedicineThere = JSON.parse(localStorage.getItem("medicine"));
//       console.log(getMedicineThere);
// let medicineThere = getMedicineThere.map(item => item.name)
// console.log(medicineThere);
console.log(this.props.medicineThere);

    return (
    <div>
            <Multiselect
            className="salesOrderInput"
              options={this.state.objectArray}
              onSelect={this.props.selectedProducts}
              displayValue="key"
            />
           
            </div>
)
  }
}
export default DropDownMedicine;
