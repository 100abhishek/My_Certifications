function App() {
    return (
        <div data-name="app">
            <Header />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
