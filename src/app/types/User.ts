export interface User extends Alcada {
    "id": number,
    "name": string,
    "email": string,
    "password": string,
    "google_calendar_token": string,
    "created_at": string,
    "updated_at": string,
    "deleted_at": string,
    "empresa_id": number,
    "tipo": string,
    "acesso_fluxo_caixa": string,
    "auto_autorizacao": number,
    "auto_autorizacao_google_calendar": number,
    "autorizar_listas_precos": number,
    "autorizar_preco_venda": number,
    "autorizar_precos_compra_custo": number,
    "autorizar_associados_vendedor": number,
    "alcadas": Alcada[]
}

export interface Alcada extends Action {
    "id": number,
    "empresa_id": number,
    "user_id": number,
    "action_id": number,
    "max_value": number,
    "created_at": string,
    "updated_at": string,
    "deleted_at": string,
    "action": Action[]
}

export interface Action {
    "id": number,
    "descricao": string,
    "internal_name": string,
    "allow_max_value": number
}