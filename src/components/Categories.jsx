import React from 'react';

class Categories extends React.Component{
    state =  {
        activeItems: 3
    }


onSelectedItem = (index) => {
    this.setState({
        activeItems : index
    });
};





render(){
    
    const { items, onClickItem} = this.props;
    return (
        <div className="categories">
            <ul>
                <li>Все</li>
                {items.map((name,index) => (
                    <li 
                        className={this.state.activeItems === index ? 'active' : ''  }
                        onClick={() => this.onSelectedItem(index)}
                        key={`${name}_${index}`}>{name}
                    </li>))
                }
            </ul>
        </div>
    )
    }
}
export default Categories;