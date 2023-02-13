import notVerefiedOrders from '@/actions/checkNotVerefiedOrders'
import createProduct from '@/actions/createProduct'

import styles from 'styles/admin.module.sass'
interface AdminObj {
  response: {
    approved: boolean
    moderator: {
      nickname: string
      fullname: string
      verefied: number
    }
  },
  orders:any
}
export default function Admin({response, orders}:AdminObj) {
  async function onSubmit(e:any) {
    e.preventDefault()
    const body:any = {
      name: e.target.name.value,
      description: e.target.description.value,
      category: e.target.category.value,
      price: parseInt(e.target.price.value),
      current: e.target.current.value
    }
    const res = await fetch("http://localhost:3000/api/createProduct", {
      method: "POST",
      body: JSON.stringify(body)
    })
    console.log(res)
  }
  if(response.approved)
  {
    return (
      <div>
        <h1>Admin Page</h1>
        <div className={styles.square}>
          <span className={styles.squareTitle}>Profile</span>
          <p>You&apos;re logged as <b>{response.moderator.nickname}</b></p>
          <p>Verefied orders count <b>{response.moderator.verefied}</b></p>
        </div>
        
        <div className={styles.square}>
          <span className={styles.squareTitle}>Not verefied orders</span>
          <table border={1} cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td>ID</td>
                <td>FullName</td>
                <td>Phone number</td>
                <td>City</td>
                <td>Address</td>
                <td>Verefied</td>
                <td>ProductsId</td>
              </tr>
              {
                orders.map((order:any) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.fullname}</td>
                    <td>{order.phone}</td>
                    <td>{order.city}</td>
                    <td>{order.address}</td>
                    <td><b>{order.verefied ? 'yes' : 'no'}</b></td>
                    <td>{order.products_id.join(", ")}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className={styles.square}>
          <div className={styles.squareTitle}>Create Product</div>
          <form method='post' onSubmit={(e) => onSubmit(e)}>
            <input required minLength={5} name="name" className={styles.input} type="text" placeholder='Name'/>
            <input required minLength={20} name="description" className={styles.input} type="text" placeholder='Description'/>
            <input required minLength={2} name="category" className={styles.input} type="text" placeholder='Category'/>
            <input required minLength={1} name="price" className={styles.input} type="text" placeholder='Price'/>
            <input required minLength={1} name="current" className={styles.input} type="text" placeholder='Current'/>
            <input className={styles.input} type="submit" value="Create Product"/>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Access Denied</h1>
      </div>
    )
  }
}

export async function getServerSideProps(ctx:any) {

  let res = await fetch('http://localhost:3000/api/proofs', {
    credentials: 'same-origin',
    headers: {
      Cookie: ctx.req.headers.cookie
    }
  })
  const handledres = await res.json()

  let orders = null;
  if(handledres.approved) {
    orders = await notVerefiedOrders()
  }

  return {
    props: {
      response: handledres,
      orders: orders
    }
  }
}