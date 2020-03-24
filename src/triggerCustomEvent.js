export default (props) => {
        const [state, setState] = useState({
            last: 1,
            current: 1,
            changed: false,
            listenerAttached: false
        });
        const host = createRef();

        if (state.current !== props.activePage) {
            setState({
                ...state,
                last: state.current,
                current: props.activePage,
                changed: true
            });
        }

        useEffect(() => {
            if (!state.listenerAttached) {
                host.current.addEventListener('pageChange', event => {
                    if (props.onPageChange) {
                        props.onPageChange(event);
                    }
                });

                setState({
                    ...state,
                    listenerAttached: true
                });
            }

            if (state.changed) {
                setState({
                    ...state,
                    changed: false
                });

                const pageChangeEvent = new CustomEvent('pageChange', {
                    detail: {
                        page: state.current,
                        previousPage: state.last
                    },
                    bubbles: true
                });

                host.current.dispatchEvent(pageChangeEvent);
            }
        });

        return (
            <mock-PPagination ref={host}>{ state.current }</mock-PPagination>
        );
    }