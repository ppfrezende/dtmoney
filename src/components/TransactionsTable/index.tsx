import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data));
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
            <td className="deposit">R$11.000,00</td>
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
