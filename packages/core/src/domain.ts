//
// Copyright © 2020 Anticrm Platform Contributors.
// 
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { Ref, Doc, Class, AnyLayout } from './core'

type Subscriber<T> = (value: T) => void
type Unsubscriber = () => void

export interface QueryResult<T extends Doc> {
  subscribe (run: Subscriber<T[]>): Unsubscriber
}

export interface Domain {
  find<T extends Doc> (_class: Ref<Class<T>>, query: AnyLayout): Promise<T[]>
  query<T extends Doc> (_class: Ref<Class<T>>, query: AnyLayout): QueryResult<T>
}
