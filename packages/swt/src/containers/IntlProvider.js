import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

export default connect(
  state => ({
    defaultLocale: 'en',
    locale: state.locale.locale,
  }),
)(IntlProvider)
