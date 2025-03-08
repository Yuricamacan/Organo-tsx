import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import { FormEvent, useState } from "react";
import { IColaborador } from "../../shared/interface/IColaborador";
import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";


interface FormularioProps {
	aoCadastrar: (valor: IColaborador) => void
	times: Array<string>
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.form`
    background: rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    width: 80%;
`;

const TituloForm = styled.h2`
    font-size: 18px;
    font-weight: bolder;
    user-select: none;
`;

export default function Formulario({ aoCadastrar, times }: FormularioProps) {

	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [imagem, setImagem] = useState("");
	const [time, setTime] = useState("");
	const [data, setData] = useState("");

	const aoEnviar = (e: FormEvent) => {
		e.preventDefault();
		aoCadastrar({
			nome,
			cargo,
			imagem,
			time,
			data
		});
		setNome('');
		setCargo('');
		setImagem('');
		setTime('');
		setData('');
	}

	return (
		<Container>
			<FormContainer onSubmit={aoEnviar}>
				<TituloForm>
Preencha os campos abaixo para criar um card do colaborador
				</TituloForm>

				<CampoTexto
					label="nome"
					placeholder="Digite seu nome"
					valor={nome}
					aoAlterar={valor => setNome(valor)}
					obrigatorio={true}
				/>
				<CampoTexto
					label="cargo"
					placeholder="Digite seu cargo"
					valor={cargo}
					aoAlterar={valor => setCargo(valor)}
					obrigatorio={true}
				/>
				<CampoTexto
					label="URL da foto"
					placeholder="URL: https://..."
					valor={imagem}
					aoAlterar={valor => setImagem(valor)}
				/>
				<CampoTexto
					label="Entrou em"
					placeholder=""
					valor={data}
					aoAlterar={valor => setData(valor)}
					tipo="date"
					obrigatorio={true}
				/>
				<ListaSuspensa
					label="Times"
					itens={times}
					valor={time}
					aoAlterar={valor => setTime(valor)}
					obrigatorio={true}
				/>

				<Botao cor="#fff">
					criar card
				</Botao>
			</FormContainer>
		</Container>
	)
} 