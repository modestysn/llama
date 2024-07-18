import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'd800284627a148f2a98e8f12ef208917'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '0e3466dfc501401380139eb73aaf6549'
                    }
                }
            }
        }
    }
}
