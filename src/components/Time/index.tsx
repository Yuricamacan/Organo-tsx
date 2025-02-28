import styled from "styled-components";
import { IColaborador } from "../../shared/interface/IColaborador";
import CardTimes from "../CardTimes";

interface TimeProps {
	key: string;
	color: string;
	backColor: string;
	nome: string;
	colaborador: Array<IColaborador>;
}

interface StyledProps {
	backColor?: string;
	color?: string;
}

const TimeContainer = styled.section<StyledProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.backColor || "#fff"};
    padding: 20px 10px;

    & h3 {
        padding: 0;
        margin: 0;
    }

    & hr {
        margin: 5px 0 20px 0;
        width: 20px;
        border: 1px solid ${props => props.color || "#000"};
        border-radius: 50px;
    } 
`;

const SessaoTimes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`

export default function Time({ key, nome, color, backColor, colaborador }: TimeProps) {
	return (
		(colaborador.length > 0)
			? <TimeContainer
				color={color}
				backColor={backColor}
			>
				<h3>{nome}</h3>
				<hr color={color} />
				<SessaoTimes>
					{colaborador.map(colab => (
						<CardTimes
							cor={color}
							nome={colab.nome}
							cargo={colab.cargo}
							imagem={colab.imagem}
							data={colab.data}
						/>
					))}
				</SessaoTimes>

			</TimeContainer> : ""
	)
}