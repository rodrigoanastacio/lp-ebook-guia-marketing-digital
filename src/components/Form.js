import styles from '../styles/components/Form.module.scss';

const Form = () => {
  return (
    <form className={styles.form} method="POST" action="https://04c4e6f3.sibforms.com/serve/MUIEAEE0V0jV9GKNjyTjZEXoBE4EsjTAmKLHxacY29WE2zvHlhkg_53GN5f0jQWw6we4atgdNWtlEGuhyT9Idrka_ZWMb9tBbfHdSUd51kWzeRRuTyZl25oU3yqBczXPqAJy8dvVl_q7fA1Y79or479SH6DCM9g87ByEasm6x9uUzm1VXezzRRfBYteKVnwMVUJ2tjTMuKAnw_XZ">
      <input type="email" id="EMAIL" name="EMAIL" data-required="true" required placeholder="Seu melhor e-mail" />
      <input type="submit" value="Receber e-book Grátis" />

      {/* <input type="text" name="email_address_check" value="" class="input--hidden" /> */}
      <input type="hidden" name="locale" value="pt" />
      <input type="hidden" name="html_type" value="simple" />
    </form>
  )
}

export default Form