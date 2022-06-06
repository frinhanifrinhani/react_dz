
import styles from './CarDetails.module.css';

const CarDetails = ({ id, brand, model, manufactured, color, km, isNew, price }) => {
  return (
    <div>
      <div className={styles.box}>
        <h5>{model}</h5>
        <p><b>Marca</b>: {brand}</p>
        <p><b>Ano de fabricação</b>: {manufactured}</p>
        <p><b>color</b>: {color}</p>
        <p><b>Quilometragem</b>: {km}</p>
        <p className={styles.price}><b>price</b>: {price}</p>
      </div>
    </div>
  )
}

export default CarDetails