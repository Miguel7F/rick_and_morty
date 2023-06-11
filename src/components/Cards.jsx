import Card from './Card';

export default function Cards({ characters, onClose }) {

   return (<div>{
      characters && characters.map(({ id, name, status, species, gender, origin, image }) => {
         return (<Card
            key={id}
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