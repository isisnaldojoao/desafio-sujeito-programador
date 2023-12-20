import { FormEvent, useState } from 'react';
import './App.css';

interface ResultadoProps {
  nome: string;
  idade: number;
}

function App() {
  const [name, setName] = useState("");
  const [ano, setAno] = useState("");
  const [report, setReport] = useState<ResultadoProps>();

  function calcularIdade(e: FormEvent) {
    e.preventDefault();

    const currentYear = new Date().getUTCFullYear();
    setReport({
      nome: name,
      idade: currentYear - Number(ano)
    });

    setName("");
    setAno("");
  }

  return (
    <div>
      <section className='container'>
        <h1 className='title'>Descubra sua idade</h1>
        <div className='form'>
          <h2 className='inputForm'>Digite o seu nome?</h2>
          <input
            className='inputName'
            placeholder='Digite o seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2 className='inputForm'>Digite o ano que nasceu?</h2>
          <input
            className='inputName'
            placeholder='Digite o ano do nascimento'
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
          <br></br>
          <button onClick={(e) => calcularIdade(e)}>Descobrir idade</button>
        </div>
        {report && report.nome !== '' && (
          <section className='report'>
            <h2>{report.nome} você tem: {report.idade} anos</h2>
          </section>
        )}
      </section>
    </div>
  );
}

export default App;
