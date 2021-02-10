import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            {/* <th /> */}
            <th>Produto</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            {/* <th /> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASBhIRExISFhIWEBUVERAWFxIXExMSFRYXGBcVExcYHSggGBonHxUYIjEjJSkrMDYuIx8zRDYtNyktLisBCgoKDg0OGhAQGysmICAtLy01Ly8tNi0tLTYrLTctLzctLS0tLS0tLS0tLzcrNS0tLS0wLy0rLS0tLSstLS0wLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwIDCAH/xABFEAACAQIEAgYFCQUFCQAAAAAAAQIDEQQFEiEGMRMiMkFRYQdxgZGhFCMzQlJikrHRNKLBwvEXc7Kz4RUWJjU2Q3KCo//EABoBAQADAQEBAAAAAAAAAAAAAAABAwUEAgb/xAApEQEAAgEEAQIFBQEAAAAAAAAAAQIRAwQSITETQQVRYZHBMkJxgfAU/9oADAMBAAIRAxEAPwDeIAAAAAAAAAAAAAAAAOFWoowu3ZGJLNaSf1vwT/QYMs4EZh8+w011KmpWvdJvb2EhSqxlBSi00+8YMuYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArnG+YVaGVdJSVOUlq6k21fb6tl3edtiHzPNOip3rY3CUZat4zS525P51bkxx5gYVskUJJXlVhGLtdqU3pSXrbSfk2fMRlHVvLopr79OLny+1cdnSo4jGQpZPWxWGxWDrVIUXU0RVOKl0abdtNTa6vdlz4LxjrZVrlKDnqtOMFJaJWTs0972aOjMcjVbJqlJKnHpKUoW6ONmpK1n5M5ej1wfC1Jxio3ctS79SdmpPvkuT9Q7MQsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArnGk30GFiucsfhl7qkZP4Jkri/2dEbxPDVjcFHwxcJ/hjNv4IkMbUSobv83+RI7KP7OiC9HqUcBiqa+pmWLVvBSquaXumTeGmnhlv3Fc4CenNs2pfZzJzXqq0ac/zuBcQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK5nuIgs8opytJU5Stv3uyfh4nzH5vTjSin573XgY+OjCXFta8Ytxw1BJtJtKUq10r8uSMfNqcLR6seb7kcWtup04mceF1dOJwzI51S6BLUkrXu3t4725IwuBsRGpxFmM4OLhJ4dq3PUozUr+XZ+J9wunUm4xb23siTymEVxBJqMU54frNJJy0TVrvvtrY0d1N5jryX04iFhAB2qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFSqf9VYt9+jDxv5KM3/MdWb9mPtOxv8A4oxi/uf8tHVnHKPt/gY+9/Tb/e7q0/Zxwvd7CSwDtxDT88PVX79JkZheS9hI4f8A59h392rH3xT/AJSNtOOP9Jv7rKADZcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACpKV+J8YvB0b+vokzqzflH2/wInK86p1eLszSmm44mEbXXZhRhC/4ozMzNsQrR38TE31orSzr04nMO7C8l7DJqVtOfYFfarVI//Co/4EdhsQuiW5EcTZ9SoZvlspzSax8OrdX6OUZ05y9S6REbW1b8Yj6PVqz22qADccQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFe45z94PIpThZ15tU8PDxqz2T9S5v1FhNacTVPlPHypv6PCUU7d3TVb7+tRX7zKNzq+lpzdZp05WwwuFsijhsE++pNudWo+1Oct22zIzFvWk37CZULRIPMZXxT8rI+S3dpmuZny0tOsZMG3fyOjP8kpYrL3TnFPvT70/FPuZk4PsmdTW5Vt7zWOpTesZS/o6zudfKHQrO+Jw1qdV99SFvm61vvJb/eUi2Gr8HN4XjXDVl2K7eGreHXvKk36qiS/92bQPr9nr+tpRafPiWbrU426AAdSoAAAAAAAAAAAAAAAAAAAAAAAAAAA1llNGUuJcyqWbvjXG9nyhTpxt8DZpQq+IqU5RoQlKHynOKsalSLtJU07yUX9VvSldbnNudD16xTOFunfhmWZKjK3Zl7mV7GYSr8pl83U5v6sv0LhGpVws5RlKdVVcTCnhVObemMo3anJpy2anu7trScJ5/PXCMaSc3iZ4eSc2kqkI6k4vTvFryM/U+DVvERzn7Lq7ua+ysYPCVVD6Op+GX6Gdh8NU19if4ZfoSuN4iq08TKiqMXVp4F4qunUaikm10dOSi9T6st2kuXiYWJ42mpOUKEXSVHBVtUqjjU6PGTUEtOhrUm+V7HivwOsfvn7JndzPsieJsNNYSnPTJaMRQmnZ7OFam1+Rswo2b5y8RgcfQcElSjeM4yclLTXnCzdrX+aTeluzel7xZeTQ2e1/5omsTnPf4/CnV1OcQAA7FIAAAAAAAAAAAAAAAAAAAAAAAAAABWp5JDEYGUZSlCcMbVq0qsbaoTjVnZq+zVu4spG4eooxku91KrS8evNkTMR3KYRuPpxo0acauqvKrWV6s5OLjOMXKLgqceolpdtKXxZyccLF4ZTpyU5SdSiouo10srOT17apb3629r+ZLYrBwqSg5p3hLVBqUo6ZWautLXc2dFXK6LUU4t6d4tym3F6tWpO9737+ZKEXm+IwU5Vp16MmqNSGGlNRk3Pp+jtTtB3nBupC8Xty2PnQZfXzKVKVGSq1KNOUoyVSF4UtE4Rcbq2hyi0rWTv3pkpLLcPVpzbgpKpOnUk1KVpTp6XCez5rRH3LwOxZbRWOddQSqvnPe7vFRe17coxXsXgInIhM9yalTwFepRpwg50qzrNLed1Kf+NuXrb8WWshs4qJ4CrB83TnbnutLJk8xMTOYTPgAB6QAAAAAAAAAAAAAAAAAAAAAAAAAAAQ8q9tel7xqyi0ld3b1ePhJMmDUWZ8Y16fGeMw6q4SEIzaSqUtU31Yta5KabXW8PyPGpS16zWvlNZiJzLZuElOU3J3W1rNd/it+RG1616jUpVL3nflbvSS2tbe9+fIq2S8WYueO6OEsLOOlSbhTmlqbUIxd5bbuN/K5YK9GpLFXdDCyXJzkpa5K93tayu0nzM/czGnEUme3RpRymZZGCxN8KpNVIzcG2trxlfw5d/9WZ+L1qnTnu3HtxilvdefnbkRlNVFU+iw1tT362rS3fw5/wASscd8T4/DKGl0FTlUSlenrtGW8Xv4OEn+E8be9L5089/ZOpExPJaquLcsNNSe9rJWte707Wb7/hYsi5HnfMOPMX8qp044jD9atBJRw1NXW26bTtLrNX9Z6INDR07Uri05UXmJnMAALngAAAAAAAAAAAAAAAAAAAAAAAAAAA848V5XXq+k7MJ06blHpYxbWntdHTdt35o9HHnTinMadP0k5hGdOcm60ZKUak4abU4Lktr+ZNfJ7J3gxuhnDhUWl6Itp22SnGTe33by9htNs0n/ALUp2hOnTlGpG15ym56rJqz1c07rb9S6ZLxxS+TqNS0Wlyk3t4KMrWlH/wAmmvPmZ2+295tzrC/SvERiV0e6bW+23h3mvPS5ik8JSpKznKpGy259a/Pl9X3ok8x9IeDp4facXK3Jdd+xQbT9so+s1bm/EXyjOXXqQ1wV9FKUns3brSkl2nZXttyS2SKNntr+pFrRiIe9W8YxCKxWU4inmmHlOFoqtTbeqD2c4pcn5nrY8kYvNITzChGNCML4mMnPVKb7UNo35dl+9nrc2J8uUABAAAAAAAAAAAAAAAAAAAAAAAAAAAAeb+KamFXpOzHp4yfzkdOlyT7C3Vml4c/6+kDy9x7t6Ssc331rL2Rh+pMeU+yaoVsA0koTd2lFJ1NV3dd7tzcfjzOqWFpJyTp129nHZ9lxju0nddZO3r8iJwVaio9fpLqUXCUHHazu20+b5WO6WaNtSdWre1pSWnfm17NWl+/yZY8uVbLaLrRtCpZ3duteSSlfT+6+f+sVXhh40YqSlrdKm00naV5atW8tlKFrK3u7s6pmsYxj1qu0XZp004ycbPT1do3tt4W8EQWIxdOUJXUnPqqMnKNlFJpppL1W8tiEueOrYZ5nS6KEo/PQtfuV4Xu9T71L38z11HsnjGKbx1N2e00/duezaf0a9SK58px05AAIAAAAAAAAAAAAAAAAAAAAAAAAAAANPxpr/ezM7pftr5/3dM3AadzfEQocf42nOcIupOnUhGTS1KVKmm1d+MWjP+J1mdDr5w6dtMcp/hnVKMHHeMfciv43Dw6eXUjz+yifnVhp7cfeiGxU4Oq+tHn4o+bimrHfbvparqwtCGjsx5+CMjE4SVTByhSkqc3a00lsrq68rq6v3XOqnOKfaXvRn4ecUr6o+9ETp62eUPU2qiM9oQhlzvg4yst5XpOz+1qk9T9drm9qf0a9SNKZvWhOEKSnHVOtTgopp6tVSK/Jm7Te+EcvTtNo7z9fy4d3PgABruMAAAAAAAAAAAAAAAAAAAAAAAAAAArvFHBOAzCpCeJpN1IK0KsZShNLwvF7r1liAFI/svy7o1G9dpeNS/xscP7KMrslprWV7LpH3+wvQI4wnlKhP0S5bb/v/jXl90L0S5ZZfTbO/ap89t+x5fFl9BHCvyTzt81Tyb0dZbhs1WKhSk68ezOc5PT5qO0b+wtgBMRh5mcgAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt="Cerveja"
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
            <td />
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        {/* <Total>
          <span>Total</span>
          <strong>R$1920,28</strong>
        </Total> */}
      </footer>
    </Container>
  );
}
