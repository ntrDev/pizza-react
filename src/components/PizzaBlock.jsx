import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function PizzaBlock({name,imageUrl,price,types,sizes}) {
    const avaliableTypes = ['тонкое', 'традиционное'];
    const avaliableSizes = [26, 30,40];
    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(sizes[0]);

    

    const onSelectTypes = (index) => {
        setActiveType(index);
    }
    const onSelectSize = (index) => {
        setActiveSize(index);
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    
                    {avaliableTypes.map((type,index) => ( 
                        <li 
                            key={type}
                            onClick={()=> onSelectTypes(index)}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index)
                            })}>
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                {avaliableSizes.map((size,index) => ( 
                        <li 
                            key={size}
                            onClick={()=> onSelectSize(index)}
                            className={classNames({
                                active: activeSize === index,
                                disabled: !sizes.includes(size)
                            })}>
                            {size} см.
                        </li>
                    ))}
                    {/* <li className="active">26 см.</li>
                    <li className="disabled">30 см.</li>
                    <li>40 см.</li> */}
                </ul>
            </div>
        </div>
        
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
  };
  
  PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
  };

export default PizzaBlock;
