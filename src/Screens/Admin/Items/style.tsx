export default ({
  mainHeading:{
        color:'black',
        fontSize:30,
      },
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      paddingTop:20,
      paddingHorizontal:15
    },
    productList: {
      flex: 1,
      paddingTop: 16,
    },
    productCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      padding: 16,
      marginBottom: 16,
    },
    productImage: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 16,
    },
    productInfo: {
      flex: 1,
      marginRight: 16,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
      color:'black'
    },
    productDescription: {
      fontSize: 14,
      color: 'black',
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4caf50',
    },
    productPriceText: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#666',
    },
    productAmount: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    amountButton: {
      width: 30,
      height: 30,
      backgroundColor: '#ffa726',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    amountButtonText: {
      color: '#fff',
      fontSize: 18,
    },
    amountText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 16,
      color:'black'
    },
    continueButton: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      right: 16,
      backgroundColor: '#4caf50',
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
    },
    continueButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  