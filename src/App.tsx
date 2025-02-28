import styled from 'styled-components';
import { useState } from 'react';
import { IColaborador } from "./shared/interface/IColaborador.ts"
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

const AppContainer = styled.div`
  background: white;
`;

const sessoesTimes = [
	{
		backColor: "#E8F8FF",
		color: "#82CFFA",
		nome: "Front-end"
	},
	{
		backColor: "#D9F7E9",
		color: "#57C278",
		nome: "Programação"
	},
	{
		backColor: "#FFF5D9",
		color: "#FFBA05",
		nome: "Mobile"
	},
	{
		backColor: "#FAE9F5",
		color: "#DB6EBF",
		nome: "UI/UX Design"
	},
	{
		backColor: "#FFEEDF",
		color: "#FF8A29",
		nome: "Gestão e Inovação"
	},
	{
		backColor: "#F0F8E2",
		color: "#A6D157",
		nome: "Data Science"
	},
	{
		backColor: "#EEEBFF",
		color: "#5533FF",
		nome: "Inteligencia Artificial"
	},
	{
		backColor: "#FDE7E8",
		color: "#E06B69",
		nome: "DevOps"
	},
]

function App() {


	const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

	const aoNovoColaborador = (colaborador: IColaborador) => {
		setColaboradores([...colaboradores, colaborador])
	}

	return (
		<AppContainer>
			<Banner srcImage="/img/banner.png" />
			<Formulario
				times={sessoesTimes.map(time => time.nome)}
				aoCadastrar={colaborador => aoNovoColaborador(colaborador)}
			/>
			{sessoesTimes.map(time => (<Time
				key={time.nome}
				nome={time.nome}
				color={time.color}
				backColor={time.backColor}
				colaborador={colaboradores.filter(colaborador => colaborador.time === time.nome)} />
			))}
		</AppContainer>
	);
}

export default App;

