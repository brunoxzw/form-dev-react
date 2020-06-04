import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./iten.css";
import { FaRegArrowAltCircleLeft, FaPrint } from "react-icons/fa";
import api from "../../services/api";
import dateFormat from "dateformat";

export default function Iten() {
  const [iten, setIten] = useState({});
  const [id, setId] = useState(window.location.pathname);

  useEffect(() => {
    api
      .get(`http://192.168.0.135:1337${id.replace("Iten", "forms")}`)
      .then((res) => setIten(res.data));
  }, []);

  return (
    <>
        <div>
          <Link to="/" style={{ width: "300px" }} className="back">
            <FaRegArrowAltCircleLeft className="i" />
              Voltar para o início
          </Link>
        </div>

        <div className="imp">
          <button onClick={() => window.print()}>
            <FaPrint className="" />
          </button>
        </div>

      <div id="printable" className="i-container">
        <div className="Row divRow">
          <div>
            <img
              src="https://www.tintacon.com.br/uploads/tintacon/design/LogoSite1.png"
              height="40"
              class=""
              alt=""
            />
          </div>

          <div>
            <h4>Formulário de Devolução </h4>
          </div>
        </div>

        <div>
          <form action="">
            <hr />

            <div>
              <div className="span">
                <span>Importante</span>
              </div>
              <p>
                {" "}
                1. Só aceitamos devolução com apresentação e identificação de nf
                de compra no sistema <br />
                2. Só aceitamos devolução de mercadoria na mesma loja onde a
                mercadoria foi adquirida de acordo a secretaria da fazenda
                estadual <br />
                3. Só aceitamos devolução de mercadoria em perfeito estado de
                conservação e sem rompimento do lacre <br />
                4. Só aceitamos devolução em forma de crédito a favor do cliente
                comprador cadastrado (cadastro no sistema para emissão de nf de
                entrada) <br />
                5. Não aceitamos devolução cuja a nf possui produtos de
                devolução anterior (forma de pagamento crédito) <br />
                6. A devolução deve ser preferencialmente recebida pelo mesmo
                vendedor
              </p>
            </div>

            <div className="span">
              <span>Dados da Devolução</span>
            </div>

            <div className="Row ddinfo">
              <label>Tipo de Cliente:</label>
              <label>{iten.tpCliente}</label>
            </div>

            <div className="Row ddinfo">
              <label>Tipo de Devolução:</label>
              <label>{iten.tpDev}</label>
            </div>

            <div className="Row ddinfo">
              <label>Motivo da Devolução:</label>
              <label>{iten.motivoDev}</label>
            </div>

            <div className="Row ddinfo">
              <label>Declarante e Devolvedor da Mercadoria:</label>
              <label>{iten.devolvedor}</label>
            </div>

            <div>
              <div>
                <div className="span">
                  <span>NF. de Origem da Mercadoria Devolvida</span>
                </div>
                <div className="Row divRow">
                  <div className="Col divCol">
                    <label>Loja:</label>
                    <label>{iten.loja}</label>
                  </div>
                  <div className="Col divCol">
                    <label>nº NF:</label>
                    <label>{iten.nf}</label>
                  </div>
                  <div className="Col divCol">
                    <label>Data:</label>
                    <label>{dateFormat(iten.created_at, "dd/mm/yyyy")}</label>
                  </div>
                  <div className="Col divCol">
                    <label>Valor:</label>
                    <label>{iten.valor}</label>
                  </div>
                </div>
              </div>

              <div>
                <div className="span">
                  <span>Cotação Devolução</span>
                </div>
                <div className="Row divRow">
                  <div className="Col divCol">
                    <label>Número:</label>
                    <label>{iten.nCotacao}</label>
                  </div>
                  <div className="Col divCol">
                    <label>Vendedor:</label>
                    <label>{iten.vendedor}</label>
                  </div>
                </div>
              </div>

              <div>
                <div className="span">
                  <span>Conferente</span>
                </div>
                <div className="divForm">
                  <div>
                    <label>Data</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Hora</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Visto</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="span">
              <span>
                Dados e assinatura de quem está devolvendo a mercadoria.
              </span>
            </div>

            <div className="terms">
              <h5>Termo de Devolução</h5>
              <p>
                Declaro para fins de exclusão de responsabilidades que, a
                mercadoria neste ato devolvida, foi adquirida nesta empresa
                Declaro ainda que estou devolvendo esta mercadoria por mim mesmo
                ou por ordem e conhecimento do cliente comprador e Através deste
                documento formalizo a devolução da mercadoria pelo mesmo
                comprador.
              </p>
            </div>

            <div className="divForm">
              <div>
                <label>Nome</label>
                <input type="text" />
              </div>
              <div>
                <label>CPF/RG/CNPJ</label>
                <input type="text" />
              </div>
              <div>
                <label>Assinatura</label>
                <input type="text" />
              </div>
            </div>

            <hr />
            <div>
              <div className="span">
                <span>Controle Interno</span>
              </div>

              <div className="divForm">
                <div>
                  <label>Data</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Nome do Vendedor</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Assinatura do Vendedor</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="divForm">
              <div>
                <label>Data</label>
                <input type="text" />
              </div>
              <div>
                <label>Nome do Caixa</label>
                <input type="text" />
              </div>
              <div>
                <label>Assinatura do Caixa</label>
                <input type="text" />
              </div>
            </div>

            <div className="divForm">
              <div>
                <label>Data</label>
                <input type="text" />
              </div>
              <div>
                <label>Nome do Gerente</label>
                <input type="text" />
              </div>
              <div>
                <label>Assinatura do Gerente</label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
