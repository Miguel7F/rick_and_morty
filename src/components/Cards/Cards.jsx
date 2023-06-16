import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'

export default function Cards({ characters, onClose }) {

   return (<div className={styles.cards}>{
      characters && characters.map(({ id, name, status, species, gender, origin, image }) => {
         return (<Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
         />);
      })
   }
   </div>);

}