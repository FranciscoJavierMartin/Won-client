import { renderWithTheme } from '@/utils/tests/helpers';
import { Grid } from '.';

describe('<Grid />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Grid>Lorem ipsum</Grid>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        margin: 3.2rem 0;
        grid-gap: 3.2rem;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
      }

      <div
        class="c0"
      >
        Lorem ipsum
      </div>
    `);
  });
});
