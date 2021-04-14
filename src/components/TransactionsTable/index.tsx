import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de WEBSITE</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>21/05/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000,00</td>
            <td>Casa</td>
            <td>20/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
