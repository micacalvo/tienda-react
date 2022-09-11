import React from 'react';
import estilos from './itemlistcontainer.module.css';
import Item from './Item';

const ItemList = ({ productos }) => {
    console.log(productos)

return (
    <div className={estilos.itemList}> 
    {
    productos.map((producto) => {
    return <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description}
    price={producto.price} stock={producto.stock} category={producto.category} img={producto.img}/>
})}
</div>
)
}

export default ItemList;