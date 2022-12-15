# Admin-Dashboard

 ## Description
 A front end demonstration of a dashboard for administrators. Managing data is an important part of any business practice. That data, however, can become difficult to understand without adequate visualizations.  This application provides an interactive user experience to view and manipulate that data at first glance. This application even has a light and dark mode, to keep up with current industry trends. This application is best suited for desktop, but does provide a collapsable side-bar to allow more space to view the data.
 
 <img width="1511" alt="image" src="https://user-images.githubusercontent.com/86696492/207755775-50ece484-5b4d-44f0-91b1-cb83590d135a.png">

 
 ## Tools
Because there were so many reused components through the different pages of this application, the React framework was used to render said compoonent across multiple pages.    
### Design
Material UI was used to design the visual aesthetic of the application. Material UI offers pre-built components that provide industry standard displays while also allowing these components to be uniquely altered to fit our own particular needs. To implement our own customized theme, we created a context using React that contained color tokens that we wanted to use within the app. Then we passed these into `createTheme` function provided by MUI.

```javascript
// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
```
Here, create a context to trigger a toggle between the light and dark options. We create another function that utilizes the `useMemo()` method provided by React to load the context on page load. We pass this theme configuration down at the top-level of our components to render the theme.  

### Data Visualization
To display our interactive charts we used the Nivo library. Nivo's website allows us to configure our data visualization and generates a boilerplate codee for us to use. The website also supplies us with sample data that is needed to satisfy what the visualizations need. This pre-determined data was used to create the visualizations within our app where it would usually be servered from the backend. 

