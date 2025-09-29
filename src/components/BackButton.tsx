import { useNavigate } from 'react-router-dom'

function BackButton() {
  const navigate = useNavigate()
  return (
    <p
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        gap: '5px',
        marginBottom: '20px',
      }}
      onClick={() => navigate(-1)}
    >
      <img
        style={{ width: '18px', marginBottom: '1px' }}
        src="/arrow-left.png"
      />
      VOLTAR
    </p>
  )
}

export default BackButton
