import styles from '../css/Contato.module.css'
export default function Contato(){

    return(
        <>
        <div className={styles.titulo}><h1><strong>Contato</strong></h1></div>
        <div className='container'>
            <section className={styles.section}>
                <form action="" className={styles.form}>
                    <input type="text" name="nome" id="nome" placeholder='Digite o seu nome' required/>
                    <input type="email" name="email" id="email" placeholder='Digite o seu e-mail' required/>
                    <input type="text" name="assunto" id="assunto" placeholder='Sobre o que você quer falar?' required/>
                    
                        <select id="departamentos" required>
                        <option>Escolha o Curso....</option>
                            <option value="administrativo" name="op">Administrativo</option>
                            <option value="biblioteca" name="op">Biblioteca</option>
                            <option value="secretaria" name="op">Secretaria</option>
                            <option value="coordenadoria" name="op">Coordenadoria</option>
                            <option value="ti" name="op">TI</option>
                            <option value="almoxarifado" name="op">Almoxarifado</option>
                            <option value="estagio" name="op">Estágio</option>
                        </select>
                    
                    <textarea name="mensagem" id="mensagem" cols="30" rows="30" placeholder='Digite aqui a mensagem...'></textarea>
                    <div className={styles.botoes}>
                        <input type="submit" value="Enviar" />
                        <input type="reset" value="Limpar Campos" />
                    </div>
                </form>
                <div className={styles.departamento}>
                    <h2>Departamento</h2>
                    <div>
                        <div className={styles.impar}><h3>Administrativo</h3>  <span>loremipsum@gmail.com</span></div>
                        <div className={styles.par}><h3>Biblioteca</h3><span>loremipsum@gmail.com</span></div>
                        <div className={styles.impar}><h3>Diretoria</h3>  <span>loremipsum@gmail.com</span></div>
                        <div className={styles.par}><h3>Secretaria</h3> <span>loremipsum@gmail.com</span></div>
                        <div className={styles.impar}><h3>Coordenadoria</h3>  <span>loremipsum@gmail.com</span></div>
                        <div className={styles.par}><h3>TI</h3> <span>loremipsum@gmail.com</span></div>
                        <div className={styles.impar}><h3>Almoxarifado</h3>  <span>loremipsum@gmail.com</span></div>
                        <div className={styles.par}><h3>Estágio</h3> <span>loremipsum@gmail.com</span></div>
                    </div>
                    <div className={styles.maps}><h4>Google maps</h4></div>
                </div>
            </section>
        </div>

        </>
    );
}