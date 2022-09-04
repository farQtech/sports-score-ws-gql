declare global {
    namespace NodeJs{
        interface ProcessEnv {
            PORT: Number
            WS_END_POINT: String
            NEW_DATA: String
        }
    }
}