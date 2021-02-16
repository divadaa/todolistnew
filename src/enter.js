import Item from './Itemlist'

export default function Itemlist(props) {
    const { actualList } = props
    return (
      <section id="itemlist">
        <ul>
          {
            actualList.map((item, index) => <Item item={item} id={index} /> )
          }
        </ul>
      </section>
    )
  }
