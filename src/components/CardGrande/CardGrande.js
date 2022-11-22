import React from 'react';
import { InfosCardGrande, TituloCardGrande, LayoutCardGrande, ImgCardGrande } from "./styles"

export function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCardGrande>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}

