function ListGroup() {
    const items1 =['book1','book2','book3','book4','book5','book6'];
    const items2 =['book7','book8','book9','book10','book11','book12'];

    return (
        <>
            <h1>Library Management</h1>
            <p>Books we have,</p>
            <div className="totalBooks">
               <ul className="list-group">
                  {items1.map(item => (
                  <li key={item}>
                    {item}
                  </li>))}
               </ul>
               <ul className="list-group">
                  {items2.map(item => (
                  <li key={item}>
                    {item}
                  </li>))}
                </ul>
            </div>
        </>
    );
}

export default ListGroup;