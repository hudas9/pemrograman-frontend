## Praktikum Pertemuan 9

- Menambahkan package [react-router-dom](https://www.npmjs.com/package/react-router-dom) untuk routing
- Menambahkan [Layout](src/Layout/Layout.js)

## Task Pertemuan 9

- Refactor Component [AddMovieForm](src/components/AddMovieForm/AddMovieForm.js)

  - State input form

    **Before:**

    ```javascript
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")
    const [poster, setPoster] = useState("")
    ```

    **After:**

    ```javascript
    const [formData, setFormData] = useState({
      title: "",
      year: "",
      genre: "",
      poster: "",
    })
    ```

  - State alert form

    **Before:**

    ```javascript
    const [titleAlert, setTitleAlert] = useState(false)
    const [yearAlert, setYearAlert] = useState(false)
    const [genreAlert, setGenreAlert] = useState(false)
    const [posterAlert, setPosterAlert] = useState(false)
    ```

    **After:**

    ```javascript
    const [formAlert, setFormAlert] = useState({
      title: false,
      year: false,
      genre: false,
      poster: false,
    })
    ```

  - Refactor function handleSubmit : [Function should do one thing](https://github.com/ryanmcdermott/clean-code-javascript#functions-should-do-one-thing)

    **Before:**

    ```javascript
    const handleSubmit = (event) => {
      event.preventDefault()

      const { title, year, type, poster } = formData
      const newAlerts = {
        title: !title,
        year: !year,
        poster: !poster,
      }
      setAlerts(newAlerts)

      if (Object.values(newAlerts).every((alert) => !alert)) {
        const movie = {
          id: nanoid(9),
          title,
          year,
          type,
          poster,
        }

        setMovies([...movies, movie])
        setFormData({
          title: "",
          year: "",
          type: "",
          poster: "",
        })
      }
    }
    ```

    **After:**

    ```javascript
    function validate() {
      const newAlerts = {
        title: !formData.title,
        year: !formData.year,
        genre: !formData.genre,
        poster: !formData.poster,
      }
      setAlerts(newAlerts)
      return Object.values(newAlerts).every((alert) => !alert)
    }

    const newMovie = {
      id: nanoid(9),
      title: formData.title,
      year: formData.year,
      genre: formData.genre,
      poster: formData.poster,
    }

    function addMovie(movie) {
      setMovies([...movies, movie])
    }

    function resetForm() {
      setFormData({
        title: "",
        year: "",
        genre: "",
        poster: "",
      })
    }

    function handleSubmit(event) {
      event.preventDefault()
      if (validate()) {
        addMovie(newMovie)
        resetForm()
      }
    }
    ```
