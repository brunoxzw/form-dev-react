import React , { useEffect , useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import api from '../../services/api'

export default function Add() {
  const [loja, setLoja] = useState('');
  const [nf, setNf] = useState('');
  const [valor, setValor] = useState("");
  const [vendedor, setVendedor] = useState("");
  const [nCotacao, setNCotacao] = useState("");
  const [tpCliente, setTpCliente] = useState("");
  const [tpDev, setTpDev] = useState("");
  const [motivoDev, setMotivoDev] = useState("");
  const [devolvedor, setDevolvedor] = useState("");

  const history = useHistory();

  async function handleNewIten(e) {
    e.preventDefault();

    

    const dados = {
      loja,
      nf,
      valor,
      vendedor,
      nCotacao,
      tpCliente,
      tpDev,
      motivoDev,
      devolvedor
    }

    try {
      await api.post('forms', dados)
    } catch (err) {
      alert('Erro ao cadastrar devolução, tente novamente.');
    }

    history.push('/')

  }

  return (
    <>
      <div>
        <Link to="/" className="back">
          <FaRegArrowAltCircleLeft className="i" />
          Voltar para o início
        </Link>
      </div>

      <div className="add-container">
        <form onSubmit={handleNewIten} className="form">
          <div className="span">
            <span>Cotação Devolução</span>
          </div>
          <div>
            <label>Tipo de Cliente</label>
            <select required name="Tipo de Cliente" onChange={e => setTpCliente(e.target.value)} id="">
              <option value="" disabled selected>
                Selecione.
              </option>
              <option value="Pessoa Física">Pessoa Física</option>
              <option value="Pessoa Jurídica">Pessoa Jurídica</option>
            </select>
          </div>

          <div>
            <label>Declarante e Devolvedor da Mercadoria</label>
            <select required onChange={e => setDevolvedor(e.target.value)}>
              <option value="" disabled selected>
                Selecione.
              </option>
              <option>1 - Própio comprador.</option>
              <option>
                2 - Pessoa autorizada pelo comprador a devolver esta mercadoria.
              </option>
            </select>
          </div>

          <div>
            <label>Tipo de Devolução</label>
            <select  required onChange={e => setTpDev(e.target.value)}>
              <option value="" disabled selected>
                Selecione um tipo de devolução.
              </option>
              <option>
                1 - Devolução antes do recebimento da mercadoria pelo cliente.
              </option>
              <option>
                2 - Devolução após o recebimento da mercadoria pelo cliente
              </option>
              <option>
                3 - Com NF de devolução emitida pelo cliente comprador pessoa
                jurídica
              </option>
              <option>4 - Com NF de entrada emitida pela vendedora</option>
            </select>
          </div>

          <div>
            <label>Motivo da Devolução</label>
            <select required onChange={e => setMotivoDev(e.target.value)}>
              <option value="" disabled selected>
                Selecione um motivo para a devolução.
              </option>
              <option>1 - Atraso na entrega.</option>
              <option>2 - Estabelecimento fechado.</option>
              <option>3 - Endereço não localizado.</option>
              <option>4 - Cliente alega não ter feito pedido.</option>
              <option>5 - Mercadoria em desacordo.</option>
              <option>6 - Cliente não pagou no ato da entrega.</option>
              <option>
                7 - Não utilizou a mercadoria. Mercadoria excedente.
              </option>
            </select>
          </div>

          <div>
            <div className="span">
              <span>NF. de Origem da Mercadoria Devolvida</span>
            </div>
            <div className="col">
              <div style={{ width: "19%" }}>
                <label>Loja</label>
                <input required onChange={e => setLoja(e.target.value)} type="number" />
              </div>
              <div style={{ width: "39%" }}>
                <label>nº NF</label>
                <input required onChange={e => setNf(e.target.value)} type="text" />
              </div>
              <div style={{ width: "39%" }}>
                <label>Valor</label>
                <input required onChange={e => setValor(e.target.value)} type="Número" />
              </div>
            </div>
          </div>

          <div>
            <div className="span">
              <span>Cotação Devolução</span>
            </div>
            <div className="col2">
              <div>
                <label>Número</label>
                <input required onChange={e => setNCotacao(e.target.value)} type="number" />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <label>Vendedor</label>
                <input required onChange={e => setVendedor(e.target.value)} type="text" />
              </div>
            </div>
          </div>

          <button type="submit" style={{ padding: "10px" }}>
            Salvar
          </button>
        </form>
      </div>
    </>
  );
}
