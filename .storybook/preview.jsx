/** @type { import('@storybook/react-vite').Preview } */
import 'minireset.css';
import "../styles/global.css";
import "../styles/tokens.css";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px"
}

export const decorators = [
  (Story) => (
    <div style={styles}>
      <Story />
    </div>
  )
  
]

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;