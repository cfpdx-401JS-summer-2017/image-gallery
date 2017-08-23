export function thumbnail({ bunny }) {
    return (
        <div style={{
      padding: '10px',
      clear: 'both'
    }}>
      <img src={bunny.url}
          alt={bunny.title}
          style={{
    float: 'left',
    width: 100
  }}
          />
      <span>{bunny.title}!</span>
      <section>{bunny.description}</section>
    </div>
    );
}