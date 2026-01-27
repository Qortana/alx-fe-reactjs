import { createContext } from 'react';

// Create a context for the counter
// Initial value is 0
const CounterContext = createContext(0);

// Export it so other components can use it
export default CounterContext;
