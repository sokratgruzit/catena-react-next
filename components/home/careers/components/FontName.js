const names = [
    {
        id: "1",
        name: "How We Work"
    },
    {
        id: "2",
        name: "Featured Jobs"
    },
    {
        id: "3",
        name: "Our Values"
    },
    {
        id: "4",
        name: "Qualities of a CORE Team:"
    },

    {
        id: "6",
        name: "Current Openings"
    },,
    {
        id: "8",
        name: "How We Hire"
    }
]

const FontName = () => {
  return (
    <div>
      {
        names.map((item) => {
            return (
            <h2 key={item.id}>{item.name}</h2>
            )
        })
      }
    </div>
  )
}

export default FontName
