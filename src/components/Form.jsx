import React from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { useSelect } from '../hooks/useSelect';

const Tittle = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: start;
`

const Button = styled.input`
  width: 100%;
`;

const Form = ({ setCategory }) => {

  // opciones para la etiqueta select del custom useSelect

  const options = [
    {value: 'business', label: 'Negocios'},
    {value: 'entertainment', label: 'Entretenimiento'},
    {value: 'general', label: 'General'},
    {value: 'health', label: 'Salud'},
    {value: 'science', label: 'Ciencia'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnología'},

  ];

  // utilizar custom hook
  const [category, NewsSelect] = useSelect('general', options);


  // Enviar categoria selecionada al state principal
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // No validamos ya que solamente tenemos un campo y es de seleccionar.

    setCategory(category);
  }

  return ( 
    <Container className="row">
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={handleSubmit}
        >
          <Tittle>Encuentra por categoría</Tittle>

          <NewsSelect />

          <div className="input-field cold s12">
            <Button 
            className="btn-large amber darked-2"
            type="submit"
            
            />
          </div>
        </form>
      </div>
    </Container>
   );
}

Form.propTypes = {
  setCategory: PropTypes.func,
};
 
export default Form;