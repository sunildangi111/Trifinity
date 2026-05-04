function FormLayout({ title, children, onSubmit }) {
  return (
    <div className="container but w-3/4">
      <h1>{title}</h1>

      <form id="recruitment-form" onSubmit={onSubmit}>
        {children}

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default FormLayout;